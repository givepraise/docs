# Praise Tools for Data Analysts
Using Praise in your organization generates a unique and rich dataset that can provide valuable insights into your community. We offer a set of Jupyter and Observable notebooks designed for Data Analysts to facilitate sensemaking. Simply choose the community you wish to examine and you are good to go!

## Features
While the Praise Dashboard already offers basic analysis tools, our Data Analysis Notebooks expand the possibilities in several exciting ways:

- **Custom Cross-Period Analysis:** Choosing specific dates allows for easy tracking of metrics across multiple reward periods. This offers a long-term overview of trends within your community.

- **Specific Insights:** You can concentrate on specific aspects of the data that may be obscured in the general Period Analysis, such as Quantifier behavior or the AI-Assisted analysis tools.

- **Cross-Community Analysis:** You can load data from different communities and combine them to create an even larger dataset!

We offer two different frameworks based on your preferred programming language: Jupyter for Python, and Observable for Javascript.

### Jupyter
For Python enthusiasts, we maintain a Colaboratory folder housing a collection of Analysis Notebooks. These notebooks can be run online or downloaded and modified to suit your needs. Each notebook allows you to select a specific time window for analysis and loads the selected data into a local DuckDB database. The Notebooks can be found [here](https://drive.google.com/drive/folders/1VgguuTxYsdrx1TnULlnTtPad057NV10I?usp=drive_link).

### Observable
For those who prefer Javascript, we offer a range of Praise Analysis Notebooks hosted on Observable. Some of these notebooks are geared towards AI-assisted Data Analysis and will require an OpenAI API key to be utilized. They can be found [here](https://observablehq.com/collection/@kristofer/praise).


## How to use Praise for Data Analysts
### Jupyter
If you want to use our Jupyter Notebooks, head over to our [Colab folder](https://drive.google.com/drive/folders/1VgguuTxYsdrx1TnULlnTtPad057NV10I?usp=drive_link) and either download a Notebook or directly run it online. For this example, we will use the main [Praise Analysis Notebook](https://observablehq.com/collection/@praise/praise-tools-for-data-analysts).

Let's take a closer look at the individual cells.

*Note: To make everything easier to read, we've used a title tag to hide the code in the cells. You can always expand them by clicking on the little arrow on the left.*


![Setup](/img/praise_for_dataAnalysts_1.png)

The first cell specifies the libraries we will use in this notebook and creates an empty DuckDB database connection. Using DuckDB allows us to use fast SQL queries on our data and avoid using dataframes when not necessary. Apart from that, we import fairly common libraries like IPython.Display, ipywidgets, and plotly.

After running this cell, we can proceed to the next one.


![Selecting](/img/praise_for_dataAnalysts_2.png)

This is where we actually fetch the praise data into our Notebook. Run the cell to load the Widget, write the link to your community into the textbox, and click the "Load Data" button. The following fields will populate with a dropdown list of existing periods, and two date selection pickers to specify start and end dates. Here, you can freely select the time window of praise you want to fetch. Keep in mind that the period selector is just there as a shorthand: the data will always be loaded based on the start and end dates you specify.

Once you have chosen the time window, you can run the rest of the Notebook. If you are executing the notebook on your local machine, you can run the cell below and click on the "Load Report" button. If you are executing the Notebook online with Google Colab, this functionality is not available, so instead select the cell by clicking on it and press "CTRL+F10" on your keyboard to execute the entire notebook from that point on. The (hidden) cell below will fetch the requested praise data from the API and load it into our DuckDB instance. Your report is ready!

### Observable

If you want to use our Javascript Notebooks, head over to our [Observable folder](https://observablehq.com/collection/@praise/praise-tools-for-data-analysts) and open a Notebook. For example, the AI-Powered ["What's Up?!" Notebook](https://observablehq.com/@praise/praise-openai-whats-up-creating-newsletters-based-on-praise?collection=@praise/praise-tools-for-data-analysts).
*Note: You will need a valid OpenAI API key to run this notebook.*

![Observable](/img/praise_for_dataAnalysts_3.png)


Once inside the notebook, introduce your OpenAI key, the link to your community and select the GPT model you want to use. Click the "Reload" button and you are good to go!

### Creating your own Praise Analysis Notebooks.
Creating your own Praise Analysis Notebooks is very straightforward. You simply need to fork an existing one!

For Jupyter Notebooks just delete everything after the 6th cell (the one below the "Load Report" button). This leaves you with a fully set up DuckDB database and from that point on, you can use all of your usual Python Data Analysis tools.

For the AI-Powered ones, you can find the used prompt stored in a variable called 'summaryPrompt' a couple of cells below the input fields. Just modify it to specifiy what you want!

## Contribute
We believe that a diverse set of ideas can enhance the data analysis process. We encourage the community to participate and untap the potential of the praise dataset, so if you've created a notebook or have innovative ideas, please share them!

Head over to the [Praise Discord](https://discord.gg/d4H2xkwb) and show us what you've come up with. We're excited to hear from you :blush: 
