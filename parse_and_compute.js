var Nb_comp = data.Nb_comp;
var dim_in = data.dim_in;
var N = data.N;

var W_out = [];
var W = [];

var time = data.time
var sigma = data.sigma

for(var i_comp = 0; i_comp < Nb_comp ; i_comp++)
{
	W_out.push(math.matrix(data.W_out[i_comp]));
	
	var W_i_comp = [];
	for(var dim = 0; dim < dim_in ; dim++)
	{
		var W_i_comp_dim = [];
		for(var id_pt = 0; id_pt < N[dim] ; id_pt++)
		{
			W_i_comp_dim.push(math.matrix(data.W[i_comp][dim][id_pt]));
		}
		
		W_i_comp.push(W_i_comp_dim);
	}
	
	W.push(W_i_comp);
	
}


function compute(pt)
	{
		val = []
		for(var i_comp = 0; i_comp < Nb_comp ; i_comp++)
		{
			var tmp = W_out[i_comp];
			for(var dim = 0; dim < dim_in ; dim++)
			{
				tmp = math.multiply(tmp,W[i_comp][dim][pt[dim]]);
			}
			
			val_tmp = [];
			
			val_tmp.push(sigma[i_comp]);
			val_tmp.push(tmp);
			
			val.push(val_tmp);
		}
		return val
	}