$(document).ready(function () {

    window.onload = function () {
        preloaderShown();
        sliderPreview();
    }

    function preloaderShown() {
        const preloader = document.querySelector('.preloader');

        if (!preloader) {
            return;
        }

        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.remove('loaded_hiding');
            document.body.classList.add('loaded');
            preloader.remove();
        }, 700);
    }
    function sliderPreview() {
        window.setTimeout(function () {
            $('.preview-slider').slick({
                autoplay: true,
                dots: false,
                arrows: false,
                infinite: true,
                speed: 1000,
                fade: true,
                cssEase: 'linear'
            });
        }, 1700);
    }

    $('.slider-action__track').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        prevArrow: $('.slider-arrow__prev_action'),
        nextArrow: $('.slider-arrow__next_action'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }

        ]
    });

    $('.slider-products__track-init').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.slider-arrow__prev_products'),
        nextArrow: $('.slider-arrow__next_products'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });


    $('.slider-products__track-init2').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.slider-arrow__prev_products2'),
        nextArrow: $('.slider-arrow__next_products2'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-articles__track').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        prevArrow: $('.slider-arrow__prev_articles'),
        nextArrow: $('.slider-arrow__next_articles'),
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }
        ]
    });

    $('.slider-brands__track').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.slider-arrow__prev_brands'),
        nextArrow: $('.slider-arrow__next_brands'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.product-gallery__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-gallery__nav'
    });
    $('.product-gallery__nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-gallery__for',
        dots: false,
        arrows: false,
        centerMode: false,
        variableWidth: true,
        focusOnSelect: true
    });

    $('.news-slider__track').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.slider-arrow__prev_news'),
        nextArrow: $('.slider-arrow__next_news'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    $('.documents-track_init').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.slider-arrow__prev_documents'),
        nextArrow: $('.slider-arrow__next_documents'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    $('.documents-track_init2').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.slider-arrow__prev_documents2'),
        nextArrow: $('.slider-arrow__next_documents2'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    $('.documents-track_init3').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.slider-arrow__prev_documents3'),
        nextArrow: $('.slider-arrow__next_documents3'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    $('.specialists__track').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.slider-arrow__prev_specialists'),
        nextArrow: $('.slider-arrow__next_specialists'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    $('.catalog-modal__link').hover(function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.catalog-modal').find('div.catalog-modal__img').removeClass('active').eq($(this).index()).addClass('active');
    });

    // маска телефона
    jQuery(function ($) {
        $.mask.definitions['~'] = '[1,2,3,4,5,6,9]';
        $('.phone_validate').mask("+7 (~99) 999-99-99");
        $.mask.definitions['~'] = '[1,2,3,4,5,6,9]';
        $(".date_validate").mask("99.99.9999", { placeholder: "дд.мм.гггг" });
    });

    // input phone    
    $(document).on('keypress', function (evt) {
        if (evt.isDefaultPrevented()) {
            // Assume that's because of maskedInput
            // See https://github.com/guillaumepotier/Parsley.js/issues/1076
            $(evt.target).trigger('input');
        }
    });

    //   placeholder
    $('.input').on('focusin', function () {
        $(this).addClass('is-active');
    });
    $('.input').on('focusout', function () {
        if (!$(this).val()) {
            $(this).removeClass('is-active');
        }
    });

    $(document).ready(
        function scrollNice() {
            $(".scroll").niceScroll({
                cursorcolor: "#d8d8d8",
                cursorwidth: "6px",
                cursorborder: false,
                cursorborderradius: false,
                autohidemode: false
            });
        }
    );


    // счетчик товаров
    (function () {
        function addHandlers(count) {
            const minus = count.querySelector(".counter__minus");
            let number = count.querySelector(".counter__number");
            const plus = count.querySelector(".counter__plus");
            plus.addEventListener("click", function () {
                number.value++;
            });
            minus.addEventListener("click", function () {
                number.value--;
            });
        }
        var counts = document.querySelectorAll(".counter");
        counts.forEach(addHandlers);
    })();

    $('.counter__number').on('input', function () {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    });


    $(document).ready(function () {
        $('.select-sort').niceSelect();
    });

})

// прелоадер главная
function addPreloader() {

    const preloader = document.querySelector('.preloader');

    // if (preloader == null) {
    //     return;
    // }

    // if (!window.localStorage.getItem('preloaderHidden')) {
    //     preloader.style.display = 'flex';
    //     window.localStorage.setItem('preloaderHidden', true);
    // }
};
addPreloader();


function menuOpen() {
    const menuBtn = document.querySelector('.header-menu__btn');
    const btnSubmenu = document.querySelectorAll('.btn__dropdown-submenu');
    const dropdownSubmenu = document.querySelectorAll('.dropdown-submenu')
    if (!menuBtn) {
        return;
    }
    btnSubmenu.forEach(function (btnSubmenuItem) {
        btnSubmenuItem.addEventListener('mouseover', function () {
            menuBtn.classList.add('active');
            btnSubmenuItem.classList.add('active');
        })
        btnSubmenuItem.addEventListener('mouseout', function () {
            menuBtn.classList.remove('active');
            btnSubmenuItem.classList.remove('active');
        })
    })
    dropdownSubmenu.forEach(function (dropdownSubmenuItem) {
        dropdownSubmenuItem.addEventListener('mouseover', function () {
            menuBtn.classList.add('active');
            dropdownSubmenuItem.classList.add('active');
        })
        dropdownSubmenuItem.addEventListener('mouseout', function () {
            dropdownSubmenuItem.classList.remove('active');
            dropdownSubmenuItem.classList.remove('active');
        })
    })
}
menuOpen();

// вызов функции открытия каталога 
function openBtnCatalog() {
    const catalogBtn = document.querySelector('.catalog-btn');

    if (!catalogBtn) {
        return;
    }

    catalogBtn.addEventListener('click', openCatalog);

}
openBtnCatalog();

// открытие каталога 
function openCatalog() {
    const catalogModal = document.querySelector('.catalog-modal');

    if (!catalogModal) {
        return;
    }

    const header = document.querySelector('.header');
    const catalogBtn = document.querySelector('.catalog-btn');

    catalogModal.classList.toggle('open');
    header.classList.toggle('index');
    document.body.classList.toggle('hidden');
    catalogBtn.classList.toggle('active');

}

// меню мобильное 
function navMobile() {
    const btnMenuMobile = document.querySelector('.btn__menu-mobile');
    const header = document.querySelector('.header');
    const navMobile = document.querySelector('.nav-mobile');

    btnMenuMobile.addEventListener('click', function () {
        navMobile.classList.toggle('open');
        header.classList.toggle('index');
        document.body.classList.toggle('hidden');
        btnMenuMobile.classList.toggle('active');
    })

}
navMobile();

// dropdown меню мобила
function dropdownMenuMobileOpen() {
    const menuMobileDropdown = document.querySelectorAll('.menu-mobile__dropdown-btn');

    menuMobileDropdown.forEach(function (menuMobileDropdownItem) {
        menuMobileDropdownItem.addEventListener('click', function () {
            menuMobileDropdownItem.classList.toggle('active');
        })
    })
}
dropdownMenuMobileOpen();


function openMenuTablet() {
    const btnMenuTablet = document.querySelector('.btn__menu-tablet');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownMenuOverlay = document.querySelector('.dropdown-menu .overlay');


    btnMenuTablet.addEventListener('click', function () {
        openMenuTabl();
    })

    dropdownMenuOverlay.addEventListener('click', function () {
        openMenuTabl();
    })


    function openMenuTabl() {
        if (btnMenuTablet.classList.contains('active')) {
            dropdownMenu.classList.remove('active');
            btnMenuTablet.classList.remove('active');
            document.body.classList.remove('hidden');
            setTimeout(function () {
                dropdownMenu.style.display = 'none';
            }, 300);
        } else {
            dropdownMenu.style.display = 'flex';
            dropdownMenu.classList.add('active');
            btnMenuTablet.classList.add('active');
            document.body.classList.add('hidden');
        }
    }
}
openMenuTablet();

function MenuTabletDrop() {
    const btnDropdownSubmenu = document.querySelectorAll('.btn__dropdown-submenu .dropdown-menu__link');

    btnDropdownSubmenu.forEach(function (btnDropdownSubmenuItem) {
        btnDropdownSubmenuItem.addEventListener('click', function () {
            btnDropdownSubmenuItem.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    })

}
MenuTabletDrop()

const modalCall = document.querySelector('.modal-call');
const btnPhoneModal = document.querySelector('.btn-phone__modal');
const modalOrder = document.querySelector('.modal-order');
const btnModalOrder = document.querySelector('.btn__modal-order');
const madalBasket = document.querySelector('.madal-basket');
const btnModalBasket = document.querySelector('.btn_modal-basket');
const modalThank = document.querySelector('.modal-thank');
const btnModalthank = document.querySelector('.btn__modal-thank');
const modalAuthorization = document.querySelector('.modal-authorization');
const btnModalAuthorization = document.querySelector('.btn__modal-authorization');
const modalRegistration = document.querySelector('.modal-registration');
const btnRegistration = document.querySelector('.btn__registration');
const btnAuthorization = document.querySelectorAll('.btn-authorization');
const modalRecoveryPassword = document.querySelector('.modal-recovery-password');
const btnRecoveryPassword = document.querySelector('.btn__recovery-password');
const modalСhangePassword = document.querySelector('.modal-change-password');
const btnChangePassword = document.querySelector('.btn__change-password');
const modalСhangeData = document.querySelector('.modal-change-data');
const btnChangeData = document.querySelector('.btn__change-data');
const modalСhangeAddress = document.querySelector('.modal-change-address');
const btnChangeAddress = document.querySelectorAll('.btn__change-address');
const modalAddAddress = document.querySelector('.modal-add-address');
const btnAddAddress = document.querySelector('.btn__add-address');
const modalSearch = document.querySelector('.modal-search');
const btnModalSearch = document.querySelector('.btn-modal__search');
const modalPolitics = document.querySelector('.modal-politics');
const btnPolitics = document.querySelector('.btn-politics');
const modalConsent = document.querySelector('.modal-consent');
const btnConsent = document.querySelectorAll('.btn-consent');
const btnAgree = document.querySelectorAll('.btn-agree');
const overlayConsent = document.querySelector('.overlay-consent');
const closeConsent = document.querySelector('.close-consent');

// открытие модалки Заказать товар
if (btnPhoneModal !== null) {
    btnPhoneModal.addEventListener('click', function () {
        openModal(modalCall);
    });
}

// открытие модалки Заказать звонок
if (btnModalOrder !== null) {
    btnModalOrder.addEventListener('click', function () {
        openModal(modalOrder);
    });
}

// открытие модалки Корзина
if (btnModalBasket !== null) {
    btnModalBasket.addEventListener('click', function () {
        openModal(madalBasket);
        $(".scroll").getNiceScroll().show().resize();
    });
}

// открытие модалки Спасибо
if (btnModalthank !== null) {
    btnModalthank.addEventListener('click', function () {
        openModal(modalThank);
    });
}

// открытие модалки Авторизация
if (btnModalAuthorization !== null) {
    btnModalAuthorization.addEventListener('click', function () {
        openModal(modalAuthorization);
    });
}

// открытие модалки Регистрация
if (btnRegistration !== null) {
    btnRegistration.addEventListener('click', function () {
        closeModal(modalAuthorization);
        openModal(modalRegistration);
    });
}

// открытие модалки Авторизация
btnAuthorization.forEach(function (btnAuthorizationItem) {
    btnAuthorizationItem.addEventListener('click', function () {
        closeModal(modalRegistration);
        closeModal(modalRecoveryPassword);
        openModal(modalAuthorization);
    });
})

// открытие модалки Восстановление пароля
if (btnRecoveryPassword !== null) {
    btnRecoveryPassword.addEventListener('click', function () {
        closeModal(modalAuthorization);
        openModal(modalRecoveryPassword);
    });
}

// открытие модалки Смена пароля
if (btnChangePassword !== null) {
    btnChangePassword.addEventListener('click', function () {
        openModal(modalСhangePassword);
    });
}

// открытие модалки Изменить данные
if (btnChangeData !== null) {
    btnChangeData.addEventListener('click', function () {
        openModal(modalСhangeData);
    });
}

// открытие модалки Изменить адрес
btnChangeAddress.forEach(function (btnChangeAddressItem) {

    if (!btnChangeAddressItem) {
        return;
    }

    btnChangeAddressItem.addEventListener('click', function () {
        openModal(modalСhangeAddress);
    });
})



// открытие модалки Добавить адрес
if (btnAddAddress !== null) {
    btnAddAddress.addEventListener('click', function () {
        openModal(modalAddAddress);
    });
}

// открытие модалки Поиск по товарам
if (btnModalSearch !== null) {
    btnModalSearch.addEventListener('click', function () {
        openModal(modalSearch);
        $(".scroll").getNiceScroll().show().resize();
    });
}

// открытие модалки Политика конфиденциальности
if (btnPolitics !== null) {
    btnPolitics.addEventListener('click', function () {
        openModal(modalPolitics);
        $(".scroll").getNiceScroll().show().resize();
    });
}

// открытие модалки Согласие посетителя 
btnConsent.forEach(function (btnConsentItem) {
    btnConsentItem.addEventListener('click', function () {
        openModalConsent(modalConsent);
        $(".scroll").getNiceScroll().show().resize();
    });
})
btnAgree.forEach(function (btnAgreeItem) {
    btnAgreeItem.addEventListener('click', function () {
        openModalConsent(modalConsent);
        $(".scroll").getNiceScroll().show().resize();
    });
})

overlayConsent.addEventListener('click', function () {
    closeModal(modalConsent);
})
closeConsent.addEventListener('click', function () {
    closeModal(modalConsent);
})

// функция на октрытие модалки
function openModal(modal) {
    modal.style.display = 'flex';
    formTab();
    document.body.classList.add('hidden');
    modal.classList.add('open');
}

// функция на октрытие модалки
function openModalConsent(modal) {
    modal.style.display = 'flex';
    formTab();
    document.body.classList.add('hid');
    modal.classList.add('open');
}

// функция на закрытие модалки
function closeModal(modal) {
    modal.classList.remove('open');
    window.setTimeout(function () {
        modal.style.display = 'none';
    }, 300);
}

// функция на закрытие модалки согласия
function closeModal(consent) {
    consent.classList.remove('open');
    document.body.classList.remove('hid');
    window.setTimeout(function () {
        consent.style.display = 'none';
    }, 300);
}



// закрытие модалок
function modal(modal) {
    const overlay = modal.querySelector('.overlay');
    const closeModal = modal.querySelector('.close-modal');
    // const closeThank = modal.querySelector('.close-thank');

    if (!overlay) {
        return;
    }
    // if (closeThank !== null) {
    //     closeThank.addEventListener('click', modalHidden);
    // }
    closeModal.addEventListener('click', modalHidden);
    overlay.addEventListener('click', modalHidden);

    function modalHidden() {
        modal.classList.remove('open');
        document.body.classList.remove('hidden');
        window.setTimeout(function () {
            modal.style.display = 'none';
        }, 300);
    }

}
const modals = document.querySelectorAll('.modal');
modals.forEach(modal);

// очистка инпута
function clearInput(clearInput) {
    const input = clearInput.querySelector('.input');
    const clearBtn = clearInput.querySelector('.clear-input');

    if (!clearBtn) {
        return;
    }

    clearBtn.addEventListener("click", function (e) {
        input.value = "";
    });
}
const label = document.querySelectorAll('.label');
label.forEach(clearInput);

// фокусировка табом
function formTab() {
    const formModal = document.querySelectorAll('.modal form');
    formModal.forEach(function (formModalItem) {
        let lastElem = formModalItem.querySelector('.last-elem');
        let firstElem = formModalItem.querySelector('.first-elem');

        if (!lastElem || !firstElem) {
            return;
        }

        lastElem.onkeydown = function (e) {
            if (e.key == 'Tab' && !e.shiftKey) {
                firstElem.focus();
                return false;
            }
        };

        firstElem.onkeydown = function (e) {
            if (e.key == 'Tab' && e.shiftKey) {
                lastElem.focus();
                return false;
            }
        };
        firstElem.focus();
    });
}


function DragDrop() {
    var imgAll = document.querySelectorAll('.product-gallery__for-item img');

    if (!imgAll) {
        return;
    }

    imgAll.forEach(function (img) {
        img.onmousedown = function (e) {

            var coords = getCoords(img);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            img.style.position = 'absolute';
            moveAt(e);


            function moveAt(e) {
                img.style.left = e.pageX - shiftX + 'px';
                img.style.top = e.pageY - shiftY + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            img.onmouseup = function () {
                document.onmousemove = null;
                img.onmouseup = null;
                img.style.position = 'static';
            };

        }

        img.ondragstart = function () {
            return false;
        };

        function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };
        }
    })

}

DragDrop();


// расположение карточек товара
function sortCatalog() {
    const btnRow = document.querySelector('.sort-layout__btn_row');
    const btnCol = document.querySelector('.sort-layout__btn_col');
    const catalogContainer = document.querySelector('.catalog-block');

    if (!catalogContainer) {
        return;
    }

    btnCol.addEventListener('click', clickCol);
    btnRow.addEventListener('click', clickRow);

    function clickCol() {
        catalogContainer.classList.add('catalog-block_col');
        catalogContainer.classList.remove('catalog-block_row');
        btnRow.classList.remove('active');
        btnCol.classList.add('active');
        localStorage.setItem('catalog', 'col');
    };

    function clickRow() {
        catalogContainer.classList.remove('catalog-block_col');
        catalogContainer.classList.add('catalog-block_row');
        btnRow.classList.add('active');
        btnCol.classList.remove('active');
        localStorage.setItem('catalog', 'row');
    };

    let localCatalog = localStorage.getItem('catalog');
    if (localCatalog == 'row') {
        clickRow();
    } else if (localCatalog == 'col') {
        clickCol();
    }

};
sortCatalog();

// изменение кнопки в ЛК
function buttonAccount() {
    const buttonMore = document.querySelectorAll('.button_more');

    if (!buttonMore) {
        return;
    }

    buttonMore.forEach(function (buttonMoreItem) {
        buttonMoreItem.addEventListener('click', function () {
            buttonMoreItem.classList.toggle('active');
        })
    })
}
buttonAccount();

// изменение адреса в ЛК
function ChangeAddress() {
    const profileAddresAll = document.querySelectorAll('.personal-card_profile .profile_col');
    const inpetChangeAddress = document.querySelector('.modal-change-address .input');

    if (!profileAddresAll) {
        return;
    }

    profileAddresAll.forEach(function (profileAddres) {
        const btnProfileAddres = profileAddres.querySelector('.btn__change-address');
        const profileAddressName = profileAddres.querySelector('.profile_address');

        btnProfileAddres.addEventListener('click', function () {
            inpetChangeAddress.value = profileAddressName.textContent;
        })

    })

}
ChangeAddress();

// Кнопка «Наверх»
(function () {
    const btnUp = document.querySelector('.btn-up');

    btnUp.addEventListener('click', backToTop);

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

})();

// Textarea Автовысота
(function () {
    document.querySelectorAll('textarea').forEach(el => {
        el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
        el.classList.add('auto');
        el.addEventListener('input', e => {
            el.style.height = 'auto';
            el.style.height = (el.scrollHeight) + 'px';
        });
    });
})();


function Drop() {
    const addressesBtn = document.querySelectorAll('.salon-addresses__btn');

    addressesBtn.forEach(function (addressesBtnItem) {
        addressesBtnItem.addEventListener('click', function () {
            addressesBtnItem.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove('active');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add('active');
            }
        })
    })

}
Drop();

function consent() {
    const consentYes = document.querySelector('.consent-yes');
    const consentNo = document.querySelector('.consent-no');
    const checkData = document.querySelectorAll('.check-data');

    consentYes.addEventListener('click', function () {
        checkData.forEach(function (checkDataItem) {
            checkDataItem.checked = true;
            closeModal(modalConsent);
        })
    });

    consentNo.addEventListener('click', function () {
        checkData.forEach(function (checkDataItem) {
            checkDataItem.checked = false;
            closeModal(modalConsent);
        })
    });

};
consent();

// function offerValidation() {
//     const productOfferValidation = document.querySelector('.product-offer__validation');
//     const productOfferLabelAll = document.querySelectorAll('.product-offer__label');
//     const btnAddBasket = document.querySelector('.btn-add-basket');

//     // if (!productOfferValidation) {
//     //     return;
//     // }

//     productOfferLabelAll.forEach(function (productOfferLabel) {
//         const productOfferInput = productOfferLabel.querySelector('.product-offer__radio');

//         btnAddBasket.addEventListener('click', function () {
//             if (productOfferInput.checked === false) {
//                 productOfferValidation.style.display = 'block';
//             }
//         })
//     })
// }
// offerValidation();

// function fun() {

//     const items = document.querySelectorAll('.product-card');
//     const btn = document.querySelector('.pagination-arrow__prev');
//     let lastKey = 0;

//     setClass(lastKey);
//     btn.addEventListener('click', function () {
//         setClass(lastKey);
//     });

//     function setClass(key) {
//         for (let i = 0; i < 3; i++) {
//             if (typeof items[key] === 'undefined') {
//                 break;
//             }
//             items[key].classList.add('add');
//             key++;
//         }
//         lastKey = key;
//     }

// }
// fun();