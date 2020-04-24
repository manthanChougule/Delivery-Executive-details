class Api::V1::UsersController < ApplicationController
  def index
    user = User.all.order(created_at: :desc)
    render json: user
  end

  def create
    user = User.create!(user_params)
    if recipe
      render json: user
    else
      render json: user.errors
    end
  end

  def show
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def destroy
    user&.destroy
    render json: { message: 'User Deleted!' }
  end

  private

  def user_params
    params.permit(:firstname, :lastname, :contact, :address)
  end

  def user
    @user ||= User.find(params[:id])
  end
end
