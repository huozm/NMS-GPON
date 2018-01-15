<template>
	<div v-bind:style="getTreeStyle()" class="topoTree">
		<item-tree v-on:clickNode="clickMyTree"  v-for="item in treeData" :todos="getTodos(item)"></item-tree>
	</div>
</template>
<style lang="scss" scoped>
	@import './treeTheme.scss';
</style>
<script>
  /* eslint-disable */
	import API from '../../../JS/api.js';
	import ItemTree from './item-tree.vue';
	import HashMap from '../../../JS/HashMap.js';
	export default {
		props:['treeData'],
		components: {
			'item-tree': ItemTree
		},
		data() {
			return {
				tree:[],
				lastNode: null,
				treeIconModule: {}
			}
		},
		created:function(){
			HashMap.clear();
			this.treeIconModule = this.initTreeIconModule();
		},
		deactivated: function(){
			console.log("组件被激活");
		},
		methods: {
			clickMyTree(node){
				console.log("触发ClickTree事件");
				if(this.lastNode){
					this.lastNode.activeItem = false;
				}
				node.activeItem = true;
				this.lastNode = node;
				this.$emit('clickMyTree', node);
			},
			getTodos(item){
				let treeIconModule = this.treeIconModule;
				return {
					item,
					HashMap,
					treeIconModule
				}
			},
			getTreeStyle(){
				return {
					'height' : API.getSceenSize().height+'px',
					'overflow': 'scroll'
				};
			},
			initTreeData(){
			},
			/*初始化T树插件图标模块*/
			initTreeIconModule(){
				return {
					light: {
						area: require('../../../image/theme/light/tree/area.svg'),
						server: require('../../../image/theme/light/tree/server.svg'),
						setUp: require('../../../image/theme/light/tree/setUp.svg'),
						device: require('../../../image/theme/light/tree/device.svg'),
						route: require('../../../image/theme/light/tree/route.svg'),
						file: require('../../../image/theme/light/icon/file.svg'),
						floder: require('../../../image/theme/light/icon/floder.svg')
					},
					dark: {
						area: require('../../../image/theme/dark/tree/area.svg'),
						server: require('../../../image/theme/dark/tree/server.svg'),
						setUp: require('../../../image/theme/dark/tree/setUp.svg'),
						device: require('../../../image/theme/dark/tree/device.svg'),
						route: require('../../../image/theme/dark/tree/route.svg'),
						file: require('../../../image/theme/dark/icon/file.svg'),
						floder: require('../../../image/theme/dark/icon/floder.svg')
					}
				}
			}
		},
		computed: {

		}
	}
</script>
