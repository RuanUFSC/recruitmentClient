// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  alias: {
    css: '<rootDir>/assets/css',
  },
  css: [
    'assets/scss/main.scss'
  ],
  devtools: { enabled: true }, 
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      }
    ],
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-primevue'
  ],
  imports: {
    dirs: ['stores', 'server/utils'],
  },
  primevue: {
    options: {
      theme: 'bootstrap4-light-blue',
      ripple: true,
      locale: {
        startsWith: 'Começa com',
        contains: 'Contém',
        notContains: 'Não contém',
        endsWith: 'Termina com',
        equals: 'Igual',
        notEquals: 'Diferente',
        noFilter: 'Sem filtro',
        lt: 'Menor que',
        lte: 'Menor ou igual a',
        gt: 'Maior que',
        gte: 'Maior ou igual a',
        dateIs: 'Data é',
        dateIsNot: 'Data não é',
        dateBefore: 'Data é antes',
        dateAfter: 'Data é depois',
        clear: 'Limpar',
        apply: 'Aplicar',
        matchAll: 'Corresponder a todos',
        matchAny: 'Corresponder a qualquer',
        addRule: 'Adicionar Regra',
        removeRule: 'Remover Regra',
        accept: 'Sim',
        reject: 'Não',
        choose: 'Escolher',
        upload: 'Upload',
        cancel: 'Cancelar',
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        weekHeader: 'Semana',
        firstDayOfWeek: 0,
        showMonthAfterYear: false,
        today: 'Hoje',
        dateFormat: 'dd/mm/yy',
        weak: 'Fraco',
        medium: 'Médio',
        strong: 'Forte',
        passwordPrompt: 'Digite uma senha',
        emptyFilterMessage: 'Nenhum resultado encontrado',
        emptyMessage: 'Nenhuma opção disponível',
        aria: {
          trueLabel: 'Verdadeiro',
          falseLabel: 'Falso',
          nullLabel: 'Nenhum',
          star: '1 estrela',
          stars: '{star} estrelas',
          selectAll: 'Selecionar todos',
          unselectAll: 'Desmarcar todos',
          close: 'Fechar',
          previous: 'Anterior',
          next: 'Próximo',
          navigation: 'Navegação',
          pageLabel: 'Página',
          firstPageLabel: 'Primeira página',
          lastPageLabel: 'Última página',
          expandRow: 'Expandir',
          collapseRow: 'Recolher',
        },
        fileSizeTypes: ['Bytes', 'KB', 'MB', 'GB'],
      },
    },
    components: {
      include: ['DataTable', 'Calendar', 'InputText', 'SelectButton', 'Column', 'MultiSelect', 'Tree', 'FileUpload', 'InputMask', 'InputSwitch', 'Checkbox', 'Tooltip', 'Slider', 'InputNumber', 'DataView', 'DataViewLayoutOptions', 'Tag', 'Button', 'Dropdown', 'Card', 'Divider', 'Menu', 'Dialog', 'TabView', 'TabPanel', 'InputGroup', 'InputGroupAddon', 'MeterGroup', 'Listbox', 'RadioButton', 'Accordion', 'AccordionTab', 'Carousel', 'ProgressSpinner', 'InputSwitch '],
      exclude: ['Toast'],
    },
    directives: {
      include: ['Ripple', 'Tooltip', 'FocusTrap'],
    }
  },
  runtimeConfig: {
    public: {
      firebase: {
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_AUTHDOMAIN,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
        appId: process.env.FIREBASE_APPID,
        measurementId: process.env.FIREBASE_MEASUREMENTID,
      },
    },
  },


})
