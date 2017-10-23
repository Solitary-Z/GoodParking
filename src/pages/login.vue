<template>
    <div class="login-page">
        <div class="scroll-view">
            <div class="page-body">
                <div class="logo-img">
                    <img :src="/static/images/list_placeholder.png" alt="" class="goods-pic">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    name: 'goodsDetail',
    data() {
        return {
            dishe: {},
            addBtnVisible: true
        }
    },
    components: {
        calculation,
        shoppingCart,
    },
    computed: {
        cartCount: function() {
            let cart = this.$store.getters.cartListArr;
            let dishId = this.dishe.dishId;
            let count = 0;
            cart.forEach(item => {
                if (item['dishId'] == dishId) {
                    count = item['count'];
                }
            });
            return count;
        }
    },
    methods: {
        ...mapMutations([
            'INIT_CARTDATA',
            'ADD_CART'
        ]),
        pic: function(url) {
            var palceholderImg = '/static/images/list_placeholder.png';
            return url === null || url.length === 0 ? palceholderImg : url;
        },
        addCart: function() {
            let dishe = this.dishe;
            this.ADD_CART({
                dishTypeId: dishe.dishTypeId,
                dishId: dishe.dishId,
                dishName: dishe.dishName,
                price: dishe.price
            });
        }
    },
    created() {
        this.INIT_CARTDATA();


        let data = window.localStorage.getItem("data");
        let params = this.$router.history.current.params;
        if (params && data) {
            data = JSON.parse(data);
            let _self = this;
            data.forEach(function(dishType) {
                if (dishType['dishTypeId'] === params.dishTypeId) {
                    dishType['dishes'].forEach(function(item) {
                        if (item['dishId'] === params.dishId) {
                            _self.dishe = item;
                        }
                    });
                }
            });

        }
    },
}

</script>
<style lang="scss" scoped>
@import '../style/goods_details.scss';

</style>
