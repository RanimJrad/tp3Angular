import { Component,OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-produits',
  templateUrl:'./add-produits.component.html' ,
  
})
export class AddProduitsComponent implements OnInit{
  newProduit= new Produit();
  message : string ='' ;
  
  constructor(private ProduitService : ProduitService ,
              private router :Router,){
  }
  ngOnInit() : void{
    
  }
  addProduit(){
    //console.log(this.newProduit);
    this.ProduitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);

  }
  

  
  
}
