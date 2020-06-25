class NikoSlider {
    constructor(config) {
        this.$slider = document.querySelector(config.selector);
    }

    init() {
        this.createSliderContainer();
        this.createSliderNav();
    }

    getSlidesCount() {
        return this.$slider.children.length;
    }

    getDomSliderChildren() {
        return this.$slider.children;
    }

    createSliderContainer() {
        const sliderWrapper = document.createElement('div');
        const sliderContainer = document.createElement('div');
        const sliderChildren = this.getDomSliderChildren();

        // добавляем каждому слайду свой класс и позицию
        [...sliderChildren].forEach((item, i) => {
            item.classList.add('niko-slider__slide');
            item.style.left = (i * 100) + '%';

            if (i === 0) item.classList.add('niko-slider__slide--active');
        });

        // добавляем класс созданному контейнеру
        sliderWrapper.classList.add('niko-slider');
        sliderContainer.classList.add('niko-slider__container');

        const navigation = this.createSliderNav(sliderContainer.children);
        
        

        // вставляем все слайды в созданный контейнер
        sliderContainer.append(...sliderChildren);
        sliderWrapper.append(sliderContainer, navigation);

        // вставляем контейнер в корнейвой DOM элемент
        this.$slider.append(sliderWrapper);
    }

    createSliderNav(slides) {
        const navigation = document.createElement('div');
        const prev = document.createElement('button');
        const next = document.createElement('button');

        navigation.classList.add('niko-slider__nav', 'nav');
        prev.classList.add('nav__button', 'nav__button--prev');
        next.classList.add('nav__button', 'nav__button--next');

        prev.textContent = "Prev";
        next.textContent = "Next";

        prev.addEventListener('click', function() {
            [...slides].forEach((elem, i) => {
                console.log('ddd');
            });
        });

        next.addEventListener('click', function() {
            
        });

        navigation.append(prev, next);

        return navigation;
    }
}