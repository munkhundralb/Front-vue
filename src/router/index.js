import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '../Layouts/HomeLayout.vue'
import AppLayout from '../Layouts/AppLayout.vue'

const routes= [
    {
        name: 'home',
        path: '/',
        component: HomeLayout,
        children: [
            {
                name: 'Home',
                path: '/',
                component: () => import('../components/Home.vue'),
                meta: {
                    title: 'Нүүр хуудас'
                  }
            },
            {
                name: 'elseltbuleg',
                path: 'elseltbuleg',
                component: () => import('../app/pages/Elseltbuleg.vue'),
                meta: {
                    title: 'Элсэлтийн бүлэг'
                  }
            },
            {
                name: 'scorecalculator',
                path: 'scorecalculator',
                component: () => import('../app/pages/ScoreCalculator.vue'),
                meta: {
                    title: 'Оноо тооцоолох'
                  }
            },
            {
                name: 'juram',
                path: 'juram',
                component: () => import('../components/Juram.vue'),
                meta: {
                    title: 'Журам'
                  }
            },
            {
                name: 'contact',
                path: 'contact',
                component: () => import('../components/Contact.vue'),
                meta: {
                    title: 'Холбоо барих'
                  }
            },
            {
                name: 'infograph',
                path: 'infograph',
                component: () => import('../components/Infograph.vue'),
                meta: {
                    title: 'Инфографик'
                  }
            }
        ],
    },
    {
        path: '/app',
        component: AppLayout,

        children: [
          {
            name: 'index',
            path: 'index',
            component: () => import('../app/index.vue'),
            meta: {
                title: 'Нүүр'
              }
        },
            {
                name: 'Dashboard',
                path: 'Dashboard',
                component: () => import('../app/Dashboard.vue'),
                meta: {
                    title: 'Элсэх хүсэлт гаргах'
                  }
            },
            {
              name: 'addprogram',
              path: 'addprogram',
              component: () => import('../app/Apply/Addprogram.vue'),
              meta: {
                  title: 'Хөтөлбөр нэмэх'
                }
            },
            {
              name: 'payment',
              path: 'payment',
              component: () => import('../app/Apply/Payment.vue'),
              props: true,
              meta: {
                  title: 'Бүртгэлийн хураамж төлөх'
                }
            },
            {
                name: 'Verify',
                path: 'Verify',
                component: () => import('../app/Verify.vue'),
                meta: {
                    title: 'Элсэх эрх баталгаажуулах'
                  }
            },
            {
                name: 'StudentRegister',
                path: 'StudentRegister',
                component: () => import('../app/StudentRegister.vue'),
                meta: {
                    title: 'Оюутан болох'
                  }
            },
            {
              name: 'Applicant',
              path: 'Applicant',
              component: () => import('../app/pages/Applicant.vue'),
              meta: {
                  title: 'Хувийн мэдээлэл'
                }
            },
            {
              name: 'appelseltbuleg',
              path: 'appelseltbuleg',
              component: () => import('../app/pages/Elseltbuleg.vue'),
              meta: {
                  title: 'Элсэлтийн бүлэг'
                }
            },
            {
              name: 'appscorecalculator',
              path: 'appscorecalculator',
              component: () => import('../app/pages/ScoreCalculator.vue'),
              meta: {
                  title: 'Онооны тооцоолуур'
                }
            },
            {
              name: 'appInfograph',
              path: 'appInfograph',
              component: () => import('../components/Infograph.vue'),
              meta: {
                  title: 'Инфографик'
                }
            },
            {
              name: 'appjuram',
              path: 'appjuram',
              component: () => import('../components/Juram.vue'),
              meta: {
                  title: 'Журам'
                }
            },
            {
              name: 'appcontact',
              path: 'appcontact',
              component: () => import('../components/Contact.vue'),
              meta: {
                  title: 'Холбоо барих'
                }
            },
            {
              name: 'confirm',
              path: 'confirm',
              component: () => import('../app/Confirm/index.vue'),
              meta: {
                  title: 'Элсэх эрх баталгаажуулах'
                }
            },
            {
              name: 'congratulation',
              path: 'congratulation',
              component: () => import('../app/Confirm/Congratulation.vue'),
              meta: {
                  title: 'Элсэх эрх баталгаажуулах'
                }
            },
            // {
            //   name: 'confirmpayment',
            //   path: 'confirmpayment',
            //   component: () => import('../app/Confirm/Payment.vue'),
            //   meta: {
            //       title: 'Элсэх эрх баталгаажуулах төлбөр'
            //     }
            // },
            {
              name: 'student',
              path: 'student',
              component: () => import('../app/Student/index.vue'),
              meta: {
                  title: 'Оюутан болох'
                }
            },
            {
              name: 'agreement',
              path: 'agreement',
              component: () => import('../app/Student/agreement.vue'),
              meta: {
                  title: 'Оюутан болох'
                }
            },
            {
              name: 'request',
              path: 'request',
              component: () => import('../app/Student/request.vue'),
              meta: {
                  title: 'Оюутан болох'
                }
            }
        ],
    },
    //{
    //    path: '/404',
    //    component: Page404Layout,
    //    children: [
    //        {
    //            name: 'not-found-advanced',
    //            path: 'not-found-advanced',
    //            component: () => import('../pages/404-pages/VaPageNotFoundSearch.vue'),
    //        },
    //    ],
    //},
]


const router = createRouter({
    mode: 'history',
    history: createWebHistory(process.env.BASE_URL),
    //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
    routes
  })

router.beforeEach((to, from, next) => {
    const title = to.meta.title
    if (title) {
      document.title = title +' - МУИС элсэлт';
    }
    next()
  })
  

export default router;