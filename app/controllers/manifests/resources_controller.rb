class Manifests::ResourcesController < ApplicationController
  before_action :set_manifests_resource, only: [:show, :edit, :update, :destroy]

  # GET /manifests/resources
  # GET /manifests/resources.json
  def index
    @manifests_resources = Manifests::Resource.all
  end

  # GET /manifests/resources/1
  # GET /manifests/resources/1.json
  def show
  end

  # GET /manifests/resources/new
  def new
    @manifests_resource = Manifests::Resource.new
  end

  # GET /manifests/resources/1/edit
  def edit
  end

  # POST /manifests/resources
  # POST /manifests/resources.json
  def create
    @manifests_resource = Manifests::Resource.new(manifests_resource_params)

    respond_to do |format|
      if @manifests_resource.save
        format.html { redirect_to @manifests_resource, notice: 'Resource was successfully created.' }
        format.json { render :show, status: :created, location: @manifests_resource }
      else
        format.html { render :new }
        format.json { render json: @manifests_resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manifests/resources/1
  # PATCH/PUT /manifests/resources/1.json
  def update
    respond_to do |format|
      if @manifests_resource.update(manifests_resource_params)
        format.html { redirect_to @manifests_resource, notice: 'Resource was successfully updated.' }
        format.json { render :show, status: :ok, location: @manifests_resource }
      else
        format.html { render :edit }
        format.json { render json: @manifests_resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manifests/resources/1
  # DELETE /manifests/resources/1.json
  def destroy
    @manifests_resource.destroy
    respond_to do |format|
      format.html { redirect_to manifests_resources_url, notice: 'Resource was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manifests_resource
      @manifests_resource = Manifests::Resource.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manifests_resource_params
      params.fetch(:manifests_resource, {})
    end
end
