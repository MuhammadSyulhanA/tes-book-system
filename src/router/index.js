import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/landing/HomeView.vue'

import AuthLayout from '../router/AuthLayout.vue';
import MainLayout from '../router/MainLayout.vue';

import LoginView from '../views/auth/LoginView.vue';
import ChangePass from '@/views/forgot-pass/ChangePass.vue';
import InputEmail from '@/views/forgot-pass/InputEmail.vue';
import VerifCode from '@/views/forgot-pass/VerifCode.vue';

import BookingView from '@/views/booking/BookingView.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginView
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/auth/RegisterView.vue')
      },
      {
        path: 'forgot-password',
        name: 'ForgotPasswordEmail',
        component: InputEmail
      },
      {
        path: 'forgot-password-code',
        name: 'ForgotPasswordCode',
        component: VerifCode
      },
      {
        path: 'reset-password',
        name: 'ResetPassword',
        component: ChangePass
      },
    ]
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/landing/AboutView.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/profile/ProfileView.vue')
      },
      {
        path: 'edit-profile',
        name: 'EditProfileView',
        component: () => import('../views/profile/EditProfile.vue')
      },
      {
        path: 'booking',
        name: 'BookingView',
        component: BookingView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
