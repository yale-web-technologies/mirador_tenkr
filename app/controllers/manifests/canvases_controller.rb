class Manifests::CanvasesController < ApplicationController
  before_action :set_manifests_canvas, only: [:show, :edit, :update, :destroy]

  # GET /manifests/canvases
  # GET /manifests/canvases.json
  def index
    @manifests_canvases = Manifests::Canvas.all
  end

  # GET /manifests/canvases/1
  # GET /manifests/canvases/1.json
  def show
  end

  # GET /manifests/canvases/new
  def new
    @manifests_canvas = Manifests::Canvas.new
  end

  # GET /manifests/canvases/1/edit
  def edit
  end

  # POST /manifests/canvases
  # POST /manifests/canvases.json
  def create
    @manifests_canvas = Manifests::Canvas.new(manifests_canvas_params)

    respond_to do |format|
      if @manifests_canvas.save
        format.html { redirect_to @manifests_canvas, notice: 'Canvas was successfully created.' }
        format.json { render :show, status: :created, location: @manifests_canvas }
      else
        format.html { render :new }
        format.json { render json: @manifests_canvas.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manifests/canvases/1
  # PATCH/PUT /manifests/canvases/1.json
  def update
    respond_to do |format|
      if @manifests_canvas.update(manifests_canvas_params)
        format.html { redirect_to @manifests_canvas, notice: 'Canvas was successfully updated.' }
        format.json { render :show, status: :ok, location: @manifests_canvas }
      else
        format.html { render :edit }
        format.json { render json: @manifests_canvas.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manifests/canvases/1
  # DELETE /manifests/canvases/1.json
  def destroy
    @manifests_canvas.destroy
    respond_to do |format|
      format.html { redirect_to manifests_canvases_url, notice: 'Canvas was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manifests_canvas
      @manifests_canvas = Manifests::Canvas.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manifests_canvas_params
      params.fetch(:manifests_canvas, {})
    end
end
