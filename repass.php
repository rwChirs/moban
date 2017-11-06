<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>乐淘 - 后台管理</title>
    
    <?php include './common/style.html'; ?>

</head>
<body>
    
    <!-- 侧边栏 -->
    <?php include './common/aside.html'; ?>
    
    <!-- 主体 -->
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
            <?php include './common/header.html'; ?>
            
            <!-- 修改密码 -->
            <div class="body">
                <div class="repass">
                    <form action="" class="form-horizontal col-xs-offset-2">
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">原密码</label>
                            <div class="col-xs-4">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">新密码</label>
                            <div class="col-xs-4">
                                <input type="password" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">确认密码</label>
                            <div class="col-xs-4">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-7">
                                <input type="submit" class="btn btn-success btn-sm pull-right" value=" 修 改 ">
                            </div>                          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <?php include './common/script.html'; ?>

    <script>

        // require(['']);

    </script>
</body>
</html>