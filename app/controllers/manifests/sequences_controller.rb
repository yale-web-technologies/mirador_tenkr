class Manifests::SequencesController < ApplicationController
  before_action :set_manifests_sequence, only: [:show, :edit, :update, :destroy]

  # GET /manifests/sequences
  # GET /manifests/sequences.json
  def index
    @manifests_sequences = Manifests::Sequence.all
  end

  # GET /manifests/sequences/1
  # GET /manifests/sequences/1.json
  def show
  end

  # GET /manifests/sequences/new
  def new
    @manifests_sequence = Manifests::Sequence.new
  end

  # GET /manifests/sequences/1/edit
  def edit
  end

  # POST /manifests/sequences
  # POST /manifests/sequences.json
  def create
    @manifests_sequence = Manifests::Sequence.new(manifests_sequence_params)

    respond_to do |format|
      if @manifests_sequence.save
        format.html { redirect_to @manifests_sequence, notice: 'Sequence was successfully created.' }
        format.json { render :show, status: :created, location: @manifests_sequence }
      else
        format.html { render :new }
        format.json { render json: @manifests_sequence.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manifests/sequences/1
  # PATCH/PUT /manifests/sequences/1.json
  def update
    respond_to do |format|
      if @manifests_sequence.update(manifests_sequence_params)
        format.html { redirect_to @manifests_sequence, notice: 'Sequence was successfully updated.' }
        format.json { render :show, status: :ok, location: @manifests_sequence }
      else
        format.html { render :edit }
        format.json { render json: @manifests_sequence.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manifests/sequences/1
  # DELETE /manifests/sequences/1.json
  def destroy
    @manifests_sequence.destroy
    respond_to do |format|
      format.html { redirect_to manifests_sequences_url, notice: 'Sequence was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manifests_sequence
      @manifests_sequence = Manifests::Sequence.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manifests_sequence_params
      params.fetch(:manifests_sequence, {})
    end
end
