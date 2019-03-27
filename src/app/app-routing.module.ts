import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CustomComponent } from './custom/custom.component';
import { StoryComponent } from './story/story.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'story', component: StoryComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
