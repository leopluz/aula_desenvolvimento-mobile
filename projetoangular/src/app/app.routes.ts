import { Routes } from '@angular/router';
import { LivroComponent } from './components/livro/livro.component';
import { ExemplosComponent } from './components/exemplos/exemplos.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
    { path: '', title: 'Meu App', component: LivroComponent },
    { path: 'biblioteca', title: 'Biblioteca', component: LivroComponent },
    { path: 'exemplos', title: 'Exemplos', component: ExemplosComponent },
    { path: 'formulario', title: 'Formulário', component: FormularioComponent }
];
