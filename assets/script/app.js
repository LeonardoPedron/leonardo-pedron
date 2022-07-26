let app = new Vue({
  el: '#app',
  data: {
    title: 'Leonardo Pedron',
    url: 'https://avatars.githubusercontent.com/u/106034227?v=4',
    alt: 'Immagine Profilo Leonardo Pedron',
    icons: [
      {
        http: 'https://github.com/LeonardoPedron',
        icon: 'fa-brands fa-github display-6'
      },
      /*{
          http: '',
          icon: 'fa-brands fa-linkedin display-6'
      },*/
      {
        http: 'https://www.instagram.com/pedronleonardo/',
        icon: 'fa-brands fa-instagram display-6'
      },
      {
        http: 'https://twitter.com/H3nry3dw4rd',
        icon: 'fa-brands fa-twitter display-6'
      },
      {
        http: 'mailto:pedronleonardo2000@gmail.com',
        icon: 'fa-solid fa-at display-6'
      },
    ]
  },
  methods: {
    copyText: function (element) {
      let text = document.querySelector(`div[data-key="${element}"]`).dataset.href;
      let dictionary = {
        '0': 'GitHub',
        '1': 'Instagram',
        '2': 'Twitter',
        '3': 'Gmail'
      }

      navigator.clipboard.writeText(text.split(':')[1]);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      });
      
      Toast.fire({
        icon: 'success',
        title: `Copiato con successo link di "${dictionary[`${element}`]}"`
      });

      window.setTimeout(function() {
        window.open(`${text}`, '_blank');
      }, 2000);
    }
  },
})