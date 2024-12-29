
package com.portfolio.tracker.service;

import com.portfolio.tracker.model.Stock;
import com.portfolio.tracker.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock updateStock(Long id, Stock stock) {
        Stock existingStock = stockRepository.findById(id).orElseThrow();
        existingStock.setName(stock.getName());
        existingStock.setTicker(stock.getTicker());
        existingStock.setQuantity(stock.getQuantity());
        existingStock.setBuyPrice(stock.getBuyPrice());
        return stockRepository.save(existingStock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }
}
