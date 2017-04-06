class Manifests::ServicesController < ApplicationController
  before_action :set_manifests_service, only: [:show, :edit, :update, :destroy]

  # GET /manifests/services
  # GET /manifests/services.json
  def index
    @manifests_services = Manifests::Service.all
  end

  # GET /manifests/services/1
  # GET /manifests/services/1.json
  def show
  end

  # GET /manifests/services/new
  def new
    @manifests_service = Manifests::Service.new
  end

  # GET /manifests/services/1/edit
  def edit
  end

  # POST /manifests/services
  # POST /manifests/services.json
  def create
    @manifests_service = Manifests::Service.new(manifests_service_params)

    respond_to do |format|
      if @manifests_service.save
        format.html { redirect_to @manifests_service, notice: 'Service was successfully created.' }
        format.json { render :show, status: :created, location: @manifests_service }
      else
        format.html { render :new }
        format.json { render json: @manifests_service.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manifests/services/1
  # PATCH/PUT /manifests/services/1.json
  def update
    respond_to do |format|
      if @manifests_service.update(manifests_service_params)
        format.html { redirect_to @manifests_service, notice: 'Service was successfully updated.' }
        format.json { render :show, status: :ok, location: @manifests_service }
      else
        format.html { render :edit }
        format.json { render json: @manifests_service.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manifests/services/1
  # DELETE /manifests/services/1.json
  def destroy
    @manifests_service.destroy
    respond_to do |format|
      format.html { redirect_to manifests_services_url, notice: 'Service was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manifests_service
      @manifests_service = Manifests::Service.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manifests_service_params
      params.fetch(:manifests_service, {})
    end
end
