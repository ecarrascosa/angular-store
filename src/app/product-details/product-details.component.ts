import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get product id from current route
    const productIdFromRoute = this.route.snapshot.paramMap.get("productId");

    //Find product that corresponds to id from route
    this.product = products.find(product => {
      return product.id === Number(productIdFromRoute);
    });
  }
}
