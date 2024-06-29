import { Routes } from '@angular/router';
import { LivroComponent } from './components/livro/livro.component';
import { ExemplosComponent } from './components/exemplos/exemplos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioMaterialComponent } from './components/formulario-material/formulario-material.component';
import { TabelaMaterialComponent } from './components/tabela-material/tabela-material.component';
import { CadastroCoresComponent } from './components/cadastro-cores/cadastro-cores.component';

export const routes: Routes = [
    { path: '', title: 'Meu App', component: TabelaMaterialComponent },
    { path: 'biblioteca', title: 'Biblioteca', component: LivroComponent },
    { path: 'exemplos', title: 'Exemplos', component: ExemplosComponent },
    { path: 'formulario', title: 'Formulário', component: FormularioComponent },
    { path: 'formulario-material', title: 'Formulário Material', component: FormularioMaterialComponent },
    { path: 'tabela-material', title: 'Tabela Material', component: TabelaMaterialComponent },
    { path: 'cadastro-cores', title: 'Cadastro de Cores', component: CadastroCoresComponent }
];
