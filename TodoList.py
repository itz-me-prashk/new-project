from flask import Flask,render_template,url_for,redirect,request,flash
import flask_mysqldb
from flask_mysqldb import MySQL
from datetime import datetime, timedelta
import datetime as dt 
import base64
from PIL import Image
import io



app=Flask(__name__)

app.secret_key = '0000000000'

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'prasham'
app.config['MYSQL_DB'] = 'main1'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_CURSORCLASS']="DictCursor"
mysql = MySQL(app)

LOGIN=False
user_id=0

@app.route('/')
def none_home():
	return redirect(url_for('login'))
@app.route('/login',methods=['POST','GET'])
def login():
	global user_id
	if request.method=='POST':
		signin_name=request.form['signin-name']
		signin_email=request.form['signin-email']
		signin_password=request.form['signin-password']


		con=mysql.connection.cursor()
		sql_cmd='select * from authentication where USERNAME = %s and GMAIL = %s and PASSWORD = %s'
		qry_cmd=[signin_name,signin_email,signin_password]
		con.execute(sql_cmd,qry_cmd)
		sign_check=con.fetchone()
		con.close()
		user_id=sign_check['ID']
		if sign_check:
			return redirect(url_for('home_page'))
		else:
			return redirect(url_for('login'))

	return render_template('Login.html')

@app.route('/sign-up',methods=['POST','GET'])
def signup():
	global user_id
	if request.method=='POST':
		signup_name=request.form['signup-username']
		signup_email=request.form['signup-useremail']
		signup_password=request.form['signup-userpassword']

		con=mysql.connection.cursor()
		sql_cmd='select * from authentication where USERNAME = %s and GMAIL = %s and PASSWORD = %s'
		qry_cmd=[signup_name,signup_email,signup_password]
		con.execute(sql_cmd,qry_cmd)
		sign_check=con.fetchone()
		con.close()
		if sign_check:
			user_id=sign_check['ID']
			return redirect(url_for('home_page'))
		else:
			con=mysql.connection.cursor()
			sql2_cmd='insert into authentication (USERNAME,PASSWORD,GMAIL) values(%s,%s,%s)'
			qry2_cmd=[signup_name,signup_password,signup_email]
			con.execute(sql2_cmd,qry2_cmd)
			mysql.connection.commit()

			sql23_cmd='select * from authentication where USERNAME = %s and PASSWORD=%s and GMAIL=%s '
			con.execute(sql23_cmd,[signup_name,signup_password,signup_email])
			results_123=con.fetchone()
			user_id=results_123['ID']
			if user_id > 0 :
				sql31=f"""CREATE TABLE user{user_id} ( ID INT PRIMARY KEY AUTO_INCREMENT ,TITLE VARCHAR(50) NOT NULL ,CONTENT VARCHAR(50) NOT NULL ,NUMBER INT NOT NULL ,CREATED DATETIME ,DELETED DATETIME)"""
				con.execute(sql31)
				mysql.connection.commit()
				return redirect(url_for('home_page'))
			con.close()
@app.route('/forgot-password')
def password():
	return render_template('forgotpass.html')
@app.route('/home',methods=['POST','GET'])
def home_page():
	global user_id
	if request.method=='POST':
		Title=request.form['title']
		Content=request.form['content']
		now = datetime.now()
		date_time_str = now.strftime("%Y-%m-%d %H:%M:%S")
		con=mysql.connection.cursor()
		syn=f'insert into user{user_id} (TITLE,CONTENT,NUMBER,CREATED) values(%s,%s,%s,%s)'
		qry=[Title,Content,'0',date_time_str] 
		con.execute(syn,qry)
		mysql.connection.commit()
		con.close()
	if user_id==0:
		return redirect(url_for('login'))
	con=mysql.connection.cursor()
	sql=f'select * from user{user_id} '
	con.execute(sql) 
	res=con.fetchall()

	sql2_cmd2='select * from authentication where ID=%s'
	con.execute(sql2_cmd2,[user_id])
	ids=con.fetchone()
	return render_template('Home.html',datas=res,result=ids)
@app.route('/Trash/<string:id>',methods=['POST','GET'])
def move_to_trash(id):
	global user_id
	con=mysql.connection.cursor()
	current_date=dt.datetime.today()+ timedelta(minutes=3)
	sql=f'update user{user_id} set NUMBER = %s , DELETED = %s where ID = %s'
	con.execute(sql,[2,current_date,id])
	mysql.connection.commit()
	return redirect(url_for('home_page'))

@app.route('/Archive/<string:id>',methods=['POST','GET'])
def move_to_archive(id):
	global user_id
	con=mysql.connection.cursor()
	sql=f'update user{user_id} set NUMBER = %s where ID = %s'
	con.execute(sql,[1,id])
	mysql.connection.commit()
	return redirect(url_for('home_page'))

@app.route('/Remainder/<string:id>',methods=['POST','GET'])
def add_remainder(id):
	global user_id
	con=mysql.connection.cursor()
	sql=f'update user{user_id} set NUMBER = %s where ID = %s'
	con.execute(sql,[3,id])
	mysql.connection.commit()
	return redirect(url_for('home_page'))

@app.route('/Delete/<string:id>',methods=['POST','GET'])
def delete(id):
	global user_id
	con=mysql.connection.cursor()
	syn = f'delete from user{user_id} where ID = %s'
	con.execute(syn,[id])
	mysql.connection.commit()
	return redirect(url_for('home_page'))
@app.route('/restore/<string:id>')
def restore(id):
	global user_id
	con=mysql.connection.cursor()
	sql=f'update user{user_id} set NUMBER = %s , DELETED = %s where ID = %s'
	con.execute(sql,[0,None,id])
	mysql.connection.commit()
	return redirect(url_for('home_page'))

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html') 
@app.route('/logout')
def logouts():
	global user_id
	user_id=0
	return redirect(url_for('login'))

if __name__=='__main__':
	app.run(debug=True)