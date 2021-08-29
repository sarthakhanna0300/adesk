class AdvtsController < ApplicationController
  before_action :set_advt, only: [:show, :update, :destroy]
  before_action :authorized, except: [:index, :show]

  # GET /myadvts
  def myadvts
    @advts = Advt.where user:@user.id
    render json: @advts 
  end

  # GET /advts
  def index
    @advts = Advt.all
    render json: @advts 
  end

  # GET /advts/1
  def show
    render json: @advt
  end

  # POST /advts
  def create
    @advt = Advt.new(advt_params)
    @advt.user = @user 
    if @advt.save
      render json: @advt, status: :created, location: @advt
    else
      render json: @advt.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /advts/1
  def update
    user_id = decoded_token[0]['user_id']
    advt = Advt.find_by(id:params[:id])

    if advt.user_id != user_id
      return render json: {error: "Advertisement does not belongs to you"}
    end

    if @advt.update(advt_params)
      render json: @advt
    else
      render json: @advt.errors, status: :unprocessable_entity
    end
  end

  # DELETE /advts/1
  def destroy
    user_id = decoded_token[0]['user_id']
    advt = Advt.find_by(id:params[:id])

    if advt.user_id != user_id
      return render json: {error: "Advertisement does not belongs to you"}
    end

    @advt.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_advt
      @advt = Advt.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def advt_params
      params.require(:advt).permit(:title, :desc, :image, :user_id)
    end
end
