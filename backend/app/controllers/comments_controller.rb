class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorized, expect: [:index]
  # GET /comments
  def index
    puts "helpppppppppp"
    puts "#{params[:advt_id]}"
    @comments = Comment.where advt_id:params[:advt_id]
    render json: @comments
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @user
    @advts = Advt.find(params[:advt_id])
    @comment.advt = @advts
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:text, :advt_id, :user_id)
    end
end
