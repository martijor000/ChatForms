import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelUIComponent } from './UI/channel-ui/channel-ui.component';
import { ChatUIComponent } from './UI/chat-ui/chat-ui.component';
import { UserUIComponent } from './UI/user-ui/user-ui.component';


const routes: Routes = [
  { path: '', component: UserUIComponent },
  { path: 'channel', component: ChannelUIComponent },
  { path: 'channel/:id', component: ChatUIComponent},
  { path: 'channel/chat', component: ChatUIComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }