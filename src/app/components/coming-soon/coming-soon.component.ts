import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {

  networks = [
    {
      icon : "faInstagram",
      link : "https://www.instagram.com/lesopranovesinet?igsh=bG8xOGE2ZjZmNWRn"
    },
    {
      icon : "faFacebookF",
      link : "https://m.facebook.com/LeSopranoVesinet"
    }
  ]
}
