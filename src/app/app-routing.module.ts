import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule) },
  {
    path: 'peraturan',
    data: { title: 'Peraturan' },
    loadChildren: () => import('./main/peraturan/peraturan.module').then(m => m.PeraturanModule)
  },
  {
    path: 'putusan',
    data: { title: 'Putusan' },
    loadChildren: () => import('./main/putusan/putusan.module').then(m => m.PutusanModule)
  },
  {
    path: 'artikel',
    data: { title: 'Artikel' },
    loadChildren: () => import('./main/artikel/artikel.module').then(m => m.ArtikelModule)
  },
  {
    path: 'monografi',
    data: { title: 'Monografi' },
    loadChildren: () => import('./main/monografi/monografi.module').then(m => m.MonografiModule)
  },
  {
    path: 'kurs',
    data: { title: 'Kurs Menteri Keuangan' },
    loadChildren: () => import('./main/kurs/kurs.module').then(m => m.KursModule)
  },
  {
    path: 'faq',
    data: { title: 'Frequently Asked Question (FAQ)' },
    loadChildren: () => import('./main/faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'berita',
    data: { title: 'Berita' },
    loadChildren: () => import('./main/berita/berita.module').then(m => m.BeritaModule)
  },
  {
    path: 'pages/:pagename',
    data: { title: '' },
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'tematik',
    data: { title: 'Tematik' },
    loadChildren: () => import('./main/tematik-page/tematik-page.module').then(m => m.TematikPageModule)
  },
  {
    path: 'feedback',
    data: { title: 'Pertanyaan/Masukan' },
    loadChildren: () => import('./main/feedback/feedback.module').then(m => m.FeedbackModule)
  },
  { path: 'pustaka', loadChildren: () => import('./main/pustaka/pustaka.module').then(m => m.PustakaModule) },
  { path: 'tematik-page', loadChildren: () => import('./main/tematik-page/tematik-page.module').then(m => m.TematikPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
