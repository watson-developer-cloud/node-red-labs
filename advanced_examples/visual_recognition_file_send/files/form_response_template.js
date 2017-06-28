<html>
    <body>
       <form action="/classify" method="post" enctype="multipart/form-data">
           <input type="file" name="pic" accept="image/*"><br>
           <input type="submit" value="Submit">
       </form>
       <div>Classifications:</div>
       <div>
           {{#result}}
           <table>
           <tr>
               <th>Class</th>
               <th>Score</th>
               <th>Type</th>
           </tr>
           {{#images}}
           {{#.}}
           {{#classifiers}}
           {{#.}}
           {{#classes}}
           {{#.}}
               <tr>
                   <td>{{class}}</td>
                   <td>{{score}}</td>
                   <td>{{&type_hierarchy}}</td>
               </tr>
           {{/.}}
           {{/classes}}
           {{/.}}
           {{/classifiers}}
           {{/.}}
           {{/images}}
           </table>
           {{/result}}
       </div>
    </body>
</html>
