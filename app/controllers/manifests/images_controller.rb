class Manifests::ImagesController < ApplicationController
  before_action :set_manifests_image, only: [:show, :edit, :update, :destroy]

  # GET /manifests/images
  # GET /manifests/images.json
  def index
    @manifests_images = Manifests::Image.all
  end

  # GET /manifests/images/1
  # GET /manifests/images/1.json
  def show
  end

  # GET /manifests/images/new
  def new
    @manifests_image = Manifests::Image.new
  end

  # GET /manifests/images/1/edit
  def edit
  end

  # POST /manifests/images
  # POST /manifests/images.json
  def create
    @manifests_image = Manifests::Image.new(manifests_image_params)

    respond_to do |format|
      if @manifests_image.save
        format.html { redirect_to @manifests_image, notice: 'Image was successfully created.' }
        format.json { render :show, status: :created, location: @manifests_image }
      else
        format.html { render :new }
        format.json { render json: @manifests_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manifests/images/1
  # PATCH/PUT /manifests/images/1.json
  def update
    respond_to do |format|
      if @manifests_image.update(manifests_image_params)
        format.html { redirect_to @manifests_image, notice: 'Image was successfully updated.' }
        format.json { render :show, status: :ok, location: @manifests_image }
      else
        format.html { render :edit }
        format.json { render json: @manifests_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manifests/images/1
  # DELETE /manifests/images/1.json
  def destroy
    @manifests_image.destroy
    respond_to do |format|
      format.html { redirect_to manifests_images_url, notice: 'Image was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manifests_image
      @manifests_image = Manifests::Image.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manifests_image_params
      params.fetch(:manifests_image, {})
    end
end
