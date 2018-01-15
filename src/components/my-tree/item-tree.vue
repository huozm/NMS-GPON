<template>
		<div :theme="getThemes" class="tree-item"  v-show="isShowChildren" v-model="todos.item"  v-bind:class="{ activeTreeItem: todos.item.activeItem }">
			<span @click="changeOpen" class="tree-icon-header" v-bind:style="getIconHeaderStyle()">

				<img v-if="judgePlusIcon === 'true'" class="tree-icon" :src="getMoreIconUrl" height="16" width="16">


				<img v-if="judgePlusIcon === 'false'" class="tree-icon" :src="getDownIconUrl" height="16" width="16">

			</span>

			<span v-on:click="clickNode">
				<img class="tree-icon" :src="todos.item.icon" height="16" width="16">
			</span>
			<el-tooltip  v-if="todos.item.hover" popper-class="poppers"  placement="right" effect="light">
				<div slot="content">
					<div>
						<el-button @click="goLogin('/login.html')" type="text">跳转页面测试</el-button>
					</div>
					<div>
						<el-button type="text">上联口配置</el-button>
					</div>
					<div>
						<el-button  type="text">告警管理</el-button>
					</div>
				</div>
				<span v-on:click="clickNode">{{ todos.item.label }}</span>
			</el-tooltip>
			<span v-else v-on:click="clickNode">{{ todos.item.label }}</span>
		</div>
</template>
<script>
  /* eslint-disable */
	import API from '../../../JS/api.js';
	export default {
		props: ['todos'],
		data() {
			return {
				theme: 'theme-light',
				treeIconModule: {}
			}
		},
		store: API.store,
		created:function(){
			let item = this.todos.item;
			this.todos.HashMap.push(item.id, item);
		},
		mounted:function(){

			this.getNodes();
		},
		watch:{
			theme:function(){
				this.getNodes();
			}
		},
		methods: {
			getNodes(){
				let iconUrl = this.todos.item.iconIndex;
				if(this.theme === 'theme-dark'){
					/*获取对应的模块*/
					this.todos.item.icon = this.todos.treeIconModule.dark[iconUrl];
				}else if(this.theme === 'theme-light'){
					this.todos.item.icon = this.todos.treeIconModule.light[iconUrl]
				}
			},
			goLogin:function(url){
				window.open('http://http://127.0.0.1:8010/#/ServerTemplateConfig/WAN?realName=192.168.18.187');
			},
			clickNode(){
				this.$emit('clickNode', this.todos.item);
			},
			//计算样式
			getIconHeaderStyle(){
				console.log("iconIndex",this.todos.item.iconIndex );
				let height = this.todos.item.level * 21 +'px';
				if(Object.is(this.todos.item.level, 0) && Object.is(this.todos.item.iconIndex, 'file')){
					height = '21px';
				}
				const style_O = {
					'margin-left': height
				};
				return style_O;
			},
			//改变节点的展开状态
			changeOpen(){
				if(this.todos.item.open){
					this.todos.item.open = false;
				}else{
					this.todos.item.open = true;
				}
			}
		},
		computed:{
			/*  主题开始   */
			getThemes(){
				this.theme = this.$store.getters.getTheme;
				return this.theme;
			},
			getMoreIconUrl(){
				let url = null;
				if( this.theme === 'theme-light'){
					url = require('../../../image/theme/light/tree/more.svg');
				}else{
					url = require('../../../image/theme/dark/tree/more.svg');
				}
				return url;
			},
			getDownIconUrl(){
				let url = null;
				if( this.theme === 'theme-light'){
					url = require('../../../image/theme/light/tree/down.svg');
				}else{
					url = require('../../../image/theme/dark/tree/down.svg');
				}
				return url;
			},
			/*  主题结束   */
			//判断父节点的图标
			judgePlusIcon(){
				if(typeof(this.todos.item.open) === 'boolean'){
					return `${!this.todos.item.open}`;
				}else{
					return 'none';
				}
			},
			//子节点是否展开
			isShowChildren(){
				if(this.todos.item.parentId){
					let node = this.todos.HashMap.get(this.todos.item.parentId);
					//关闭下属所有子集菜单
					if(node){
						if(!node.open  && typeof(this.todos.item.open) === 'boolean'){
							this.todos.item.open = false;
						}
						return node.open;
					}else{
						return true;
					}
				}else{
					return true;
				}
			}
		}
	}
</script>
