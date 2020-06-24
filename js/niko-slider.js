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
        const navigation = this.createSliderNav();

        // добавляем каждому слайду свой класс
        [...sliderChildren].forEach(item => {
            item.classList.add('niko-slider__slide');
        });

        // добавляем класс созданному контейнеру
        sliderWrapper.classList.add('niko-slider');
        sliderContainer.classList.add('niko-slider__container');

        // вставляем все слайды в созданный контейнер
        sliderContainer.append(...sliderChildren);
        sliderWrapper.append(sliderContainer, navigation);

        // вставляем контейнер в корнейвой DOM элемент
        this.$slider.append(sliderWrapper);
    }

    createSliderNav() {
        const navigation = document.createElement('div');
        const prev = document.createElement('button');
        const next = document.createElement('button');

        navigation.classList.add('niko-slider__nav', 'nav');
        prev.classList.add('nav__button', 'nav__button--prev');
        next.classList.add('nav__button', 'nav__button--next');

        prev.textContent = "Prev";
        next.textContent = "Next";

        navigation.append(prev, next);

        return navigation;
    }
}