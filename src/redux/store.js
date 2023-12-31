/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import getRecipeSlice from './reducer/recipe/getRecipeSlice';
import getRecipeLimitSlice from './reducer/recipe/getRecipeLimitSlice';
import getRecipeIdSlice from './reducer/recipe/getRecipeIdSlice';
import getUsersIdSlice from './reducer/users/getUserbyIdSlice';
import updateUsersSlice from './reducer/users/updateUser';
import getRecipeByUsersIdSlice from './reducer/recipe/getRecipeUsersIdSlice';
import getLikedUsersIdSlice from './reducer/liked/getLikedUsersIdSlice';
import createLikedSlice from './reducer/liked/createLikedSlice';
import getSavedUserIdSlice from './reducer/saved/getSavedUserIdSlice';
import createCommentSlice from './reducer/comment/createCommentSlice';
import getCommentRecipeIdSlice from './reducer/comment/getCommentRecipeIdSlice';
import deleteCommentSlice from './reducer/comment/deleteCommentSlice';

export const store = configureStore({
  reducer: {
    getRecipe: getRecipeSlice,
    getRecipeLimit: getRecipeLimitSlice,
    getRecipeId: getRecipeIdSlice,
    getRecipeByUsersId: getRecipeByUsersIdSlice,
    getUsersId: getUsersIdSlice,
    updateUsers: updateUsersSlice,
    createLiked: createLikedSlice,
    getLikedUsersId: getLikedUsersIdSlice,
    getSavedUserId: getSavedUserIdSlice,
    createComment: createCommentSlice,
    getCommentRecipeId: getCommentRecipeIdSlice,
    deleteComment: deleteCommentSlice,
  },
});
