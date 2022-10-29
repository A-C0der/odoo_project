# See LICENSE file for full copyright and licensing details.
{
	'name':"Gift_Card Expired Date",
	'version':'1.0',
	'depends':['base','gift_card'],
	'summary':'Gift Card Error Fix',
	'author' : 'Htet Arkar kyaw',
	"license": "AGPL-3",
	'description': """ 
	  To work Automatic Gift Card Expired Date""",
	'application':True,
	'category':'Technical/Gift Card',
	'images':['static/description/icon.png'],
	'website':'https://github.com/A-C0der/odoo_project',
	'sequence':-100, 
	'data':['views/cron_giftcard.xml',],
}
