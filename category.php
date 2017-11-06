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
            
            <div class="body category">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">分类管理</a></li>
                    <li class="active">商品分类</li>
                </ol>
                <div class="page-title">
                    <a href="javascript:;" class="btn btn-success btn-sm pull-right">添加分类</a>
                </div>
                <div class="panel panel-default">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th width="10%">序号</th>
                                <th>分类名称</th>
                                <th>是否显示</th>
                                <td>品牌数量</td>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>前端开发</td>
                                <td>是</td>
                                <td>8</td>
                                <td>
                                    <a href="javascript:;" class="btn btn-info btn-xs">编 辑</a>
                                    <a href="javascript:;" class="btn btn-warning btn-xs">注 销</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>前端开发</td>
                                <td>是</td>
                                <td>8</td>
                                <td>
                                    <a href="javascript:;" class="btn btn-info btn-xs">编 辑</a>
                                    <a href="javascript:;" class="btn btn-warning btn-xs">注 销</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>前端开发</td>
                                <td>是</td>
                                <td>8</td>
                                <td>
                                    <a href="javascript:;" class="btn btn-info btn-xs">编 辑</a>
                                    <a href="javascript:;" class="btn btn-warning btn-xs">注 销</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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