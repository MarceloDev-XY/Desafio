ETEC Professor Horácio Augusto da Silveira
Avaliação de Design Digital – Segundo Bimestre – Usabilidade e Padrões de Projeto

Nome:Marcelo Barboza de Araujo__________________________________________________________



private void btbanana_Click(object sender, EventArgs e)
{	
	double BANANA;
	double CHOPPE;
	double guaraná;
	string rguaraná;
	 try 
		{
			BANANA=Convert.ToDouble(txtBANANA.Text); //converte banana para texto		//BANANA=Convert.ToDouble(txtBANANA.Text);
			guaraná=Math.Sqrt(txtBANANA.Text);//Retorna o valor da BANANA				//guaraná=Math.Sqrt(BANANA);
			rguaraná=Convert.ToString(txtrguaraná.Text);//converte rguaraná para texto	//rguaraná=Convert.ToString(guaraná);
 			txtResultado.Text = rguaraná; 	//o resultado é rguaraná 					//txtResultado.Text = rguaraná; 
		} 
	catch(FormatException)
		{
			MessageBox.Show("Formatação Errada.");
		}
 }


1.	Organize o código acima segundo o que foi explicado nas aulas de técnicas de programação afim de garantir legibilidade e sustentabilidade do código.

2.	Desenhe uma classe que implemente o código acima como um método. 
