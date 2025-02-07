import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap);
    nuxtApp.provide('formValidation', (() => {
        'use strict'
      
        const forms = document.querySelectorAll('.needs-validation')
      
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) { 
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })())
})