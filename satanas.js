ETEC Professor Hor�cio Augusto da Silveira
Avalia��o de Design Digital � Segundo Bimestre � Usabilidade e Padr�es de Projeto

Nome:Marcelo Barboza de Araujo__________________________________________________________



private void btbanana_Click(object sender, EventArgs e)
{	
	double BANANA;
	double CHOPPE;
	double guaran�;
	string rguaran�;
	 try 
		{
			BANANA=Convert.ToDouble(txtBANANA.Text); //converte banana para texto		//BANANA=Convert.ToDouble(txtBANANA.Text);
			guaran�=Math.Sqrt(txtBANANA.Text);//Retorna o valor da BANANA				//guaran�=Math.Sqrt(BANANA);
			rguaran�=Convert.ToString(txtrguaran�.Text);//converte rguaran� para texto	//rguaran�=Convert.ToString(guaran�);
 			txtResultado.Text = rguaran�; 	//o resultado � rguaran� 					//txtResultado.Text = rguaran�; 
		} 
	catch(FormatException)
		{
			MessageBox.Show("Formata��o Errada.");
		}
 }


1.	Organize o c�digo acima segundo o que foi explicado nas aulas de t�cnicas de programa��o afim de garantir legibilidade e sustentabilidade do c�digo.

2.	Desenhe uma classe que implemente o c�digo acima como um m�todo. 
