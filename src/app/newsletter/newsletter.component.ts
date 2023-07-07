import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent { 
  newsletter = { nom: '', email: '' };
 

  constructor(private http: HttpClient,private router: Router ) {
    
  }    
  
  createNewsletter() {
    this.http.post<any>("http://localhost:8084/api/newsletters", this.newsletter)
      .subscribe(() => {
        console.log('Newsletter created successfully');
        this.router.navigate(['/newslettersuccess'])
        // Traitez ici la réponse du backend ou effectuez des actions supplémentaires
        
      }, 
        (error) => {
          console.error('Failed to create newsletter', error);
          if (error.status === 409) {
            alert('L\'e-mail existe déjà dans la liste de diffusion');
          } else {
            alert('Une erreur s\'est produite lors de la création de la newsletter');
          }
        }
      );
  }
}
