class Manifests::ManifestsController < ApplicationController
  before_action :set_manifests_manifest, only: [:show, :edit, :update, :destroy]

  # GET /manifests/manifests
  # GET /manifests/manifests.json
  def index
    @manifests_manifests = Manifests::Manifest.all
  end

  # GET /manifests/manifests/1
  # GET /manifests/manifests/1.json
  def show
  end

  # GET /manifests/manifests/new
  def new
    @manifests_manifest = Manifests::Manifest.new
  end

  # GET /manifests/manifests/1/edit
  def edit
  end

  # POST /manifests/manifests
  # POST /manifests/manifests.json
  def create
    @manifests_manifest = Manifests::Manifest.new(manifests_manifest_params)

    respond_to do |format|
      if @manifests_manifest.save
        format.html { redirect_to @manifests_manifest, notice: 'Manifest was successfully created.' }
        format.json { render :show, status: :created, location: @manifests_manifest }
      else
        format.html { render :new }
        format.json { render json: @manifests_manifest.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manifests/manifests/1
  # PATCH/PUT /manifests/manifests/1.json
  def update
    respond_to do |format|
      if @manifests_manifest.update(manifests_manifest_params)
        format.html { redirect_to @manifests_manifest, notice: 'Manifest was successfully updated.' }
        format.json { render :show, status: :ok, location: @manifests_manifest }
      else
        format.html { render :edit }
        format.json { render json: @manifests_manifest.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manifests/manifests/1
  # DELETE /manifests/manifests/1.json
  def destroy
    @manifests_manifest.destroy
    respond_to do |format|
      format.html { redirect_to manifests_manifests_url, notice: 'Manifest was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manifests_manifest
      @manifests_manifest = Manifests::Manifest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manifests_manifest_params
      params.fetch(:manifests_manifest, {})
    end
end
