import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StoryComponent } from './story/story.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'story', component: StoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
