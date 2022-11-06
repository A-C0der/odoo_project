odoo.define('pos_order.OrderLineAdd', function(require) {
    'use strict';
       const { Gui } = require('point_of_sale.Gui');
       const PosComponent = require('point_of_sale.PosComponent');
       const { posbus } = require('point_of_sale.utils');
       const ProductScreen = require('point_of_sale.ProductScreen');
       const { useListener } = require('web.custom_hooks');
       const Registries = require('point_of_sale.Registries');
       const PaymentScreen = require('point_of_sale.PaymentScreen');
       const Ordersceen=require('point_of_sale.TicketScreen');
       class OrderLineAdd extends PosComponent {
        constructor() {
            super(...arguments);
            useListener('create-new-order', this._onCreateNewOrder);
        }
        _onCreateNewOrder() {
            this.env.pos.add_new_order();
           
         }
         get count() {
            if (this.env.pos) {
                return this.env.pos.get_order_list().length;
            } else {
                return 0;
            }
        }
       }
    
       OrderLineAdd.template = 'OrderLineAdd';
       ProductScreen.addControlButton({
           component: OrderLineAdd,
           condition: function() {
               return this.env.pos;
           },
       });
       Registries.Component.add(OrderLineAdd);
       return OrderLineAdd;
    });