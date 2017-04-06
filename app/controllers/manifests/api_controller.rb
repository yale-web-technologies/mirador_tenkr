class Manifests::ApiController < ApplicationController
  def image_service
    canvas_id = params[:canvasId]
    logger.debug("image_service canvas id: #{canvas_id}")
    canvas = Manifests::Canvas.find_by canvas_id: canvas_id
    logger.debug("canvases: #{canvas}")

    if canvas
      service = canvas.images[0].resource.service
      render json: {
        service: {
          id: service['service_id'],
          profile: service['profile']
        },
        errorCode: 0,
        errorMessage: 'Success'
      }
    else
      render json: { errorCode: 1, errorMessage: 'Not found' }
    end
  end

  def ingest
    manifest_id = params[:id]
    logger.debug "ManifestsController#ingest manifest URL:#{manifest_id}"
    response = RestClient.get(manifest_id)
    response_obj = JSON.parse(response)
    create_manifest(response_obj)
    redirect_to '/admin/manifests'
  end

  private
    def create_manifest(manifest_obj)
      id = manifest_obj['@id']
      logger.debug("Manifest ID: #{id}")

      unless id.strip.empty?
        manifest = Manifests::Manifest.find_by manifest_id: id
        manifest.destroy if manifest
        manifest = Manifests::Manifest.new(manifest_id: id,
          label: manifest_obj['label'])
        manifest_obj['sequences'].each do |sequence_obj|
          manifest.sequences << create_sequence(sequence_obj)
        end
        manifest.save
      end
      manifest
    end

    def create_sequence(sequence_obj)
      id = sequence_obj['@id']
      logger.debug("Sequence ID: #{id}")
      sequence = Manifests::Sequence.new(sequence_id: id,
        label: sequence_obj['label'],
        viewing_direction: sequence_obj['viewingDirection'])
      sequence_obj['canvases'].each do |canvas_obj|
        sequence.canvases << create_canvas(canvas_obj)
      end
      sequence
    end

    def create_canvas(canvas_obj)
      id = canvas_obj['@id']
      logger.debug("Canvas ID: #{id}")
      canvas = Manifests::Canvas.new(canvas_id: id,
        label: canvas_obj['label'],
        width: canvas_obj['width'],
        height: canvas_obj['height'])
      canvas_obj['images'].each do |image_obj|
        canvas.images << create_image(image_obj)
      end
      canvas
    end

    def create_image(image_obj)
      id = image_obj['@id']
      logger.debug("Image ID: #{id}")
      image = Manifests::Image.new(image_id: id)
      image.resource = create_resource(image_obj['resource'])
      image
    end

    def create_resource(resource_obj)
      id = resource_obj['@id']
      logger.debug("Resource ID: #{id}")
      resource = Manifests::Resource.new(image_id: id,
        resource_type: resource_obj['@type'], # because "type" is a reserved column name in activerecord
        width: resource_obj['@width'],
        height: resource_obj['@height'])
      resource.service = create_service(resource_obj['service'])
      resource
    end

    def create_service(service_obj)
      id = service_obj['@id']
      logger.debug("Service ID: #{id}")
      service = Manifests::Service.new(service_id: id,
        profile: service_obj['profile'])
      service
    end
end
