
import {shade, deviceType} from '../tools/enum';

function* requestTheme(deviceType, shade) {
    switch (deviceType) {
        case deviceType.DESKTOP:
            yield buildDesktop(shade);
            break;
        case deviceType.TABLOID:
            yield buildTabloid(shade);
            break;
        case deviceType.MOBILE:
            yield buildMobile(shade);
            break;
        default:
            yield buildDesktop(shade.DARK);
            break;
    }
}

function buildDesktop(shade) {
    return {};
}

function buildTabloid(shade) {}

function buildMobile(shade) {}