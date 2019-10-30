
import { menu } from "./constant";
import { ApiCall, PostApiCall } from "./api.axios";

import * as data from './response.json';

const GQLresolver = async () => {
  const resolvers = {
    Query: {
      menu: () => menu,
      mastermenu: async (parent, args, context, info) => {
      
        try {
        let startTime =   args.filters['createdStartTime'] ;
        let endTime =   args.filters['createdEndTime:'] ;
        if (startTime || endTime) args['pageNumber'] = 1;
          if (args.filters['videoId'].length > 0 ){ 
           args['pageNumber'] = 1;
          }
          else {
            args['filters'] = {}
          } 
        }catch(e){
          

        }
        console.log(args.filters);
        let url = `http://127.0.0.1:3000/youtube_donwloader/api/v1/downloadService?pageNumber=${args.pageNumber || 1}&limit=10`;
        const mastermenu = await PostApiCall(url, args.filters);
        
        console.log(url);
        return mastermenu.mastermenu
      }
    }
  };

  return resolvers;
}
export default GQLresolver;