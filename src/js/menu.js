function menuMobile () {
    let menuMobile = document.querySelector('.menu_ul')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('animate__animated','animate__slideInDown','open')
        document.querySelector('.imagMenuMobile').src = 'src/img/menu_white_36dp.svg'
    } else {
        menuMobile.classList.add('animate__animated','animate__slideInDown','open')
        document.querySelector('.imagMenuMobile').src = 'src/img/close_white_36dp.svg'
    }
}