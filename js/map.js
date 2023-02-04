/*          Добавление обычной метки (возможно добавить балуны, хинты, несколько меток)

ymaps.ready(init);

function init(){
    let map = new ymaps.Map('map', {
    center: [55.91684972837165,37.831903133922246],
    zoom: 16,
    controls: [],
    });
let placemark = new ymaps.Placemark([55.91684972837165,37.831903133922246], {
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.png',
        iconImageSize: [50,50],
    });
    map.geoObjects.add(placemark);
}

*/

ymaps.ready(init);

function init() {
  let map = new ymaps.Map("map", {
    center: [55.91684972837165, 37.831903133922246],
    zoom: 10,
    controls: [],
  });
  let placemark = new ymaps.Placemark(
    [55.91684972837165, 37.831903133922246],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/mark.png",
      iconImageSize: [50, 50],
    },
  );
  map.geoObjects.add(placemark);

  var myCircle = new ymaps.Circle(
    [
      // Координаты центра круга.
      [55.91684972837165, 37.831903133922246],
      // Радиус круга в метрах.
      10000,
    ],
    {},
    {
      // Задаем опции круга.
      // Включаем возможность перетаскивания круга.
      draggable: false,
      // Цвет заливки.
      // Если добавить два нуля в начало числа, цвет станет прозрачным
      // Прозрачность заливки также можно задать используя опцию "fillOpacity".
      fillColor: "#00696962",
      // Цвет обводки.
      strokeColor: "#FFFFFF",
      // Прозрачность обводки.
      strokeOpacity: 0.8,
      // Ширина обводки в пикселях.
      strokeWidth: 0,
    },
  );

  // Добавляем круг на карту.
  map.geoObjects.add(myCircle);
}
