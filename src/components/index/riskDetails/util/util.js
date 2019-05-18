
const projectid = localStorage.getItem("projectid");
/**
 * @name 风险管理-拒收、接收、认证操作
 * @param {*} that 
 * @param {function} DoRiskWork 风险管理问题提交工作流操作接口
 * @param {integer} ID 风险ID
 */
export const dotoRiskWork = (that, DoRiskWork, status) => {
    // that.load();
    let params = {
            Risk: {
                ID: that.riskid
            },
            Receiver: {
                ID: that.receiverID,
                Status: status,
                AuthTime: that.authTime == "" ? require('moment')(new Date()).format('YYYY-MM-DD') : require('moment')(that.authTime).format('YYYY-MM-DD')
            },
            AuthFiles: that.authPhotoList.length == 0 ? [] : that.authPhotoList
        }
    DoRiskWork(params).then(res => {
        if(res.StatusCode === 200){
            that.$toast({
                type: "success",
                className: "my-toast",
                message: "操作成功！"
            });
            that.$router.go(-1)
        }else{
            that.$toast({
                type: "fail",
                className: "my-toast",
                message: "操作失败"
            });
        }
        // that.$toast.clear();
    });
}

export const pubInterface = (that, pubInterfaceName, param) => {
    return new Promise((resolve,reject)=>{
        that.Request(pubInterfaceName(param)).then(res=>{
            if(res.StatusCode === 200){
                resolve(res)
            }else{
                reject(new Error(res.Message))
            }
        })
    })
}