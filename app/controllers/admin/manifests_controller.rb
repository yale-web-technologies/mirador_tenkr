class Admin::ManifestsController < ApplicationController
  before_action :set_admin_manifest, only: [:show, :edit, :update, :destroy]

  # GET /admin/manifests
  # GET /admin/manifests.json
  def index
    @admin_manifests = Admin::Manifest.all
  end

  # GET /admin/manifests/1
  # GET /admin/manifests/1.json
  def show
  end

  # GET /admin/manifests/new
  def new
    @admin_manifest = Admin::Manifest.new
  end

  # GET /admin/manifests/1/edit
  def edit
  end

  # POST /admin/manifests
  # POST /admin/manifests.json
  def create
    @admin_manifest = Admin::Manifest.new(admin_manifest_params)

    respond_to do |format|
      if @admin_manifest.save
        format.html { redirect_to @admin_manifest, notice: 'Manifest was successfully created.' }
        format.json { render :show, status: :created, location: @admin_manifest }
      else
        format.html { render :new }
        format.json { render json: @admin_manifest.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/manifests/1
  # PATCH/PUT /admin/manifests/1.json
  def update
    respond_to do |format|
      if @admin_manifest.update(admin_manifest_params)
        format.html { redirect_to @admin_manifest, notice: 'Manifest was successfully updated.' }
        format.json { render :show, status: :ok, location: @admin_manifest }
      else
        format.html { render :edit }
        format.json { render json: @admin_manifest.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/manifests/1
  # DELETE /admin/manifests/1.json
  def destroy
    @admin_manifest.destroy
    respond_to do |format|
      format.html { redirect_to admin_manifests_url, notice: 'Manifest was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_manifest
      @admin_manifest = Admin::Manifest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_manifest_params
      params.require(:admin_manifest).permit(:url)
    end
end
