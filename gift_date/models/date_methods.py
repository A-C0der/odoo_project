import datetime
from odoo import api, fields, models
class GiftExpired(models.Model):
	_inherit="gift.card"

	def gift_card(self):
		self.sudo().search([("expired_date", "<",fields.Datetime.to_datetime(datetime.date.today())),]).write({'state':'expired'})
