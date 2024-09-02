import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneVolume,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone: true
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {
  transform(value: string): IconProp {
    switch (value) {
      case 'faEnvelope' :
        return faEnvelope
      case 'faFacebookF' :
        return faFacebookF
      case 'faInstagram' :
        return faInstagram
      case 'faMapMarkedAlt' :
        return faMapMarkedAlt
      case 'faPhoneVolume' :
        return faPhoneVolume
      case 'faUtensils' :
        return faUtensils
      default :
        return faUtensils
    }
  }
}
