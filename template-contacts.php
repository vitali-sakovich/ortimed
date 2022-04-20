<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);
?>
<? if (!empty($arResult['ITEMS'])): ?>
    <div class="map" id="map"></div>
    <script type="text/javascript">
        var map;
        var locations = [
            <? foreach ($arResult['ITEMS'] as $arItem): ?>
            {
                "name": "​<?=$arItem['NAME']?>",
                "lat": "<?=$arItem['COORD_LAT']['VALUE']?>",
                "lng": "<?=$arItem['COORD_LNG']['VALUE']?>",
                "is_exact": true
            },
            <? endforeach; ?>
        ];

        function drawMap() {

            var myOptions = {
                zoom: 11,
                center: new google.maps.LatLng(56.02842852159353, 92.86535962744756),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                fullscreenControl: false,
                disableDefaultUI: true,
                zoomControl: true,
                scrollwheel: false,
            }
            map = new google.maps.Map(document.getElementById("map"), myOptions);

            setMarkers(locations);

        }

        function setMarkers(locations) {
            for (i = 0; i < locations.length; i++) {
                var location = locations[i];
                var nameMarker = location.name;
                plotMarker(location, nameMarker);
            }
        }

        function plotMarker(location, nameMarker) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(location.lat, location.lng),
                // icon: {
                //     url: "/local/templates/main/img/marker.svg",
                //     scaledSize: new google.maps.Size(43, 57)
                // },
                map: map,
            });
            attachSecretMessage(marker, nameMarker);
        }

        function attachSecretMessage(marker, secretMessage) {
            const infowindow = new google.maps.InfoWindow({
                content: secretMessage,
            });
            marker.addListener("mouseover", () => {
                infowindow.open(marker.get("map"), marker);
            });
            marker.addListener("mouseout", () => {
                infowindow.close(marker.get("map"), marker);
            });

        }
    </script>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=0aa2f6b6-353d-4a10-bb62-97763a975ef4&lang=ru_RU" type="text/javascript">
    </script>
    </div>
<? endif; ?>