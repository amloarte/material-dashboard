import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';
import { Menu } from '../../models/menu.model';
import { ID_SISTEMA } from '../../config/config';
import { IFuncionalidades } from '../../interfaces/funcionalidades';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  funcionalidades: IFuncionalidades[] = [];

  menu: Menu ={
    id_perfil: 1,
    id_sistema: ID_SISTEMA,
    tipo: 450
  }
  
  constructor( private sidebarService: SidebarService) { 
    this.sidebarService.getFuncionalidades(this.menu)
      .subscribe((resp: any) => {
        this.funcionalidades = resp
        console.log(resp);
      })
  }
  

  ngOnInit(): void {
    //this.getFuncionalidades();
  }
  
  getFuncionalidades(){
   
  }
}
