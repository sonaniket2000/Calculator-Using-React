import React from 'react'

class Result extends React.Component{
    constructor(props){
        super(props);
        this.handleResult = this.handleResult.bind(this);
    }

    handleResult(){
        var str = this.props.str;
        let sum = 0,end=0,start=0,flag=0;
      //  console.log("Result  = "+eval(str.toString())); // we can use eval function directly but it's dangerous as not to use suggested by documentation
        var op1='',s1='',s2='',s3='';
        var opnd1=0,opnd2=0,opnd3=0;


        for(let i=0;i<str.length;)
        {
            end=i;
                  let temp='';
                  while((i < str.length) && (str[i]!=='+' && str[i]!=='-' && str[i]!=='*' && str[i]!=='/')){
                      temp = temp + str[i];
                      i++;
                   }
                  opnd1 = parseFloat(temp);

                  op1 = str[i++];
                   if(op1 === '*' || op1 === '/')
                   {
                    let temp1='';
                    while((i < str.length) && (str[i]!=='+' && str[i]!=='-' && str[i]!=='*' && str[i]!=='/')){
                        temp1 = temp1 + str[i];
                        i++;
                     }
                     start = i;
                     opnd2 = parseFloat(temp1);
                     if(op1 === '*')
                     {
                        opnd2 = opnd1 * opnd2;
                     }
                        else if(op1 === '/')
                    {
                        opnd2 = opnd1 / opnd2;
                    }
                    s1 = str.substring(0,end);
                    s2 = opnd2.toString();
                    s3 = str.substring(start,str.length);
                    str = s1 + s2 + s3;

                    i = end;
                  }
        }

    

    for(let i=0;i<str.length;i++)
    {
        if(str[i] ==='+' || str[i] ==='-' || str[i] ==='*' || str[i] ==='/')
        {
            flag=1;
            break;
        }
    }

    if(flag === 0)
    {
        sum = parseFloat(str);
    }

        if(flag === 1)
        {
            for(let i=0;i<str.length;)
            {
           
                if(str[i]!=='+' && str[i]!=='-' && str[i]!=='*' && str[i]!=='/')
                {
                    let temp='';
                    while((i < str.length) && (str[i]!=='+' && str[i]!=='-' && str[i]!=='*' && str[i]!=='/')){
                        temp = temp + str[i];
                        i++;
                    }
                    opnd1 = parseFloat(temp);
                }
                else
                opnd1=sum;
            
                op1 = str[i++];
               
                let temp1='';
                while((i < str.length) && (str[i]!=='+' && str[i]!=='-' && str[i]!=='*' && str[i]!=='/')){
                    temp1 = temp1 + str[i];
                    i++;
                }
                opnd2 = parseFloat(temp1);
              
               
                if(op1=== '+')
                {
                    sum = opnd1 + opnd2;
                }
                else if(op1 === '-')
                {
                    sum = opnd1 - opnd2;
                }
    
            }
        }

       let ff = sum.toString()
        this.props.handleClick(ff);
        this.props.handleFlag();
    }


render(){
    return(
        <>
        <button className="btn" onClick={this.handleResult}>{this.props.data}</button>
        </>
    );
}

}

export default Result;
